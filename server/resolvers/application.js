import { AdvitoApplication } from '../models'

export default {
  Query: {
    applicationList: async (_, __, { user }) => {
      const AdvitoApplicationList = await AdvitoApplication.query()
        .where('isActive', true)
        .whereNot('id', 4)
        .eager('advitoApplicationRole')
        .modifyEager('advitoApplicationRole', builder => {
          builder.whereIn('id', user.roleIds)
        })
      return AdvitoApplicationList.map(
        ({ advitoApplicationRole, applicationName }) => ({
          applicationName,
          enabled: advitoApplicationRole.length > 0
        })
      )
    }
  }
}
