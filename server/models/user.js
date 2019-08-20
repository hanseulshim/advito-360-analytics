import { Model } from 'objection'

export class AdvitoUser extends Model {
  static get tableName () {
    return 'advito_user'
  }

  fullName () {
    return this.name_first + ' ' + this.name_last
  }

  static get relationMappings () {
    return { advito_user_role_link: {
      relation: Model.HasManyRelation,
      modelClass: AdvitoUserRoleLink,
      join: {
        from: 'advito_user.id',
        to: 'advito_user_role_link.advito_user_id'
      }
    },
    advito_user_session: {
      relation: Model.HasManyRelation,
      modelClass: AdvitoUserSession,
      join: {
        from: 'advito_user.id',
        to: 'advito_user_session.advito_user_id'
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
