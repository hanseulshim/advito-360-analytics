import { Model } from 'objection'

export class Client extends Model {
  static get tableName () {
    return 'client'
  }

  static get relationMappings () {
    return {
      clientAdvitoApplicationLink: {
        relation: Model.HasManyRelation,
        modelClass: ClientAdvitoApplicationLink,
        join: {
          from: 'client.id',
          to: 'clientAdvitoApplicationLink.clientId'
        }
      }
    }
  }
}

export class ClientAdvitoApplicationLink extends Model {
  static get tableName () {
    return 'ClientAdvitoApplicationLink'
  }

  static get relationMappings () {
    return {
      client: {
        relation: Model.HasManyRelation,
        modelClass: Client,
        join: {
          from: 'ClientAdvitoApplicationLink.clientId',
          to: 'client.id'
        }
      }
    }
  }
}
