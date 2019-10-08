import { Model } from 'objection'

export class AdvitoApplication extends Model {
  static get tableName () {
    return 'advitoApplication'
  }

  static get relationMappings () {
    return {
      advitoApplicationRole: {
        relation: Model.HasManyRelation,
        modelClass: AdvitoApplicationRole,
        join: {
          from: 'advitoApplication.id',
          to: 'advitoApplicationRole.advitoApplicationId'
        }
      }
    }
  }
}

export class AdvitoApplicationRole extends Model {
  static get tableName () {
    return 'advitoApplicationRole'
  }
}
