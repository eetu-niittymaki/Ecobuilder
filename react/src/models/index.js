// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Organisationalsolution, Planningsolution, Technicalsolution } = initSchema(schema);

export {
  Organisationalsolution,
  Planningsolution,
  Technicalsolution
};