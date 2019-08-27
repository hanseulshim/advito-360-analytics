import { Model } from 'objection'

export class AdvitoUser extends Model {
  static get tableName () {
    return 'advito_user'
  }

  fullName () {
    return this.name_first + ' ' + this.name_last
  }

  static get relationMappings () {
    return { advitoUserRoleLink: {
      relation: Model.HasManyRelation,
      modelClass: AdvitoUserRoleLink,
      join: {
        from: 'advito_user.id',
        to: 'advito_user_role_link.advito_user_id'
      }
    },
    advitoUserSession: {
      relation: Model.HasManyRelation,
      modelClass: AdvitoUserSession,
      join: {
        from: 'advito_user.id',
        to: 'advito_user_session.advito_user_id'
      }
    },
    accessToken: {
      relation: Model.HasManyRelation,
      modelClass: AccessToken,
      join: {
        from: 'advito_user.id',
        to: 'access_token.advito_user_id'
      }
    } }
  }
}

export class AdvitoUserRoleLink extends Model {
  static get tableName () {
    return 'advito_user_role_link'
  }
}

export class AdvitoUserSession extends Model {
  static get tableName () {
    return 'advito_user_session'
  }
}

export class AccessToken extends Model {
  static get tableName () {
    return 'access_token'
  }
}

export class EmailTemplate extends Model {
  static get tableName () {
    return 'email_template'
  }
}
