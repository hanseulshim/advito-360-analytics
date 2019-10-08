import { Model } from 'objection'

export class AdvitoUser extends Model {
  static get tableName () {
    return 'advitoUser'
  }

  fullName () {
    return this.nameFirst + ' ' + this.nameLast
  }

  static get relationMappings () {
    return {
      advitoUserRoleLink: {
        relation: Model.HasManyRelation,
        modelClass: AdvitoUserRoleLink,
        join: {
          from: 'advitoUser.id',
          to: 'advitoUserRoleLink.advitoUserId'
        }
      },
      advitoUserSession: {
        relation: Model.HasManyRelation,
        modelClass: AdvitoUserSession,
        join: {
          from: 'advitoUser.id',
          to: 'advitoUserSession.advitoUserId'
        }
      },
      accessToken: {
        relation: Model.HasManyRelation,
        modelClass: AccessToken,
        join: {
          from: 'advitoUser.id',
          to: 'accessToken.advitoUserId'
        }
      }
    }
  }
}

export class AdvitoUserRoleLink extends Model {
  static get tableName () {
    return 'advitoUserRoleLink'
  }
}

export class AdvitoUserSession extends Model {
  static get tableName () {
    return 'advitoUserSession'
  }

  static get relationMappings () {
    return {
      advitoUser: {
        relation: Model.HasManyRelation,
        modelClass: AdvitoUser,
        join: {
          from: 'advitoUserSession.advitoUserId',
          to: 'advitoUser.id'
        }
      }
    }
  }
}

export class AccessToken extends Model {
  static get tableName () {
    return 'accessToken'
  }
}

export class EmailTemplate extends Model {
  static get tableName () {
    return 'emailTemplate'
  }
}
