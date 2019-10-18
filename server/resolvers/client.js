import { ClientAdvitoApplicationLink } from '../models'

export default {
  Query: {
    clientList: async (_, { applicationId }) =>
      ClientAdvitoApplicationLink.query()
        .select('client.id', 'clientName', 'gcn', 'industry')
        .joinRelation('client')
        .where('advitoApplicationId', applicationId)
        .orderBy('clientName')
  }
}
