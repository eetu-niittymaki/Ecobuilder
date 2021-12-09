import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrganisationalsolutionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlanningsolutionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TechnicalsolutionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Organisationalsolution {
  readonly id: string;
  readonly positionId?: number;
  readonly Title?: string;
  readonly Content?: string;
  readonly Popup?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Organisationalsolution, OrganisationalsolutionMetaData>);
  static copyOf(source: Organisationalsolution, mutator: (draft: MutableModel<Organisationalsolution, OrganisationalsolutionMetaData>) => MutableModel<Organisationalsolution, OrganisationalsolutionMetaData> | void): Organisationalsolution;
}

export declare class Planningsolution {
  readonly id: string;
  readonly positionId?: number;
  readonly Title?: string;
  readonly Content?: string;
  readonly Popup?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Planningsolution, PlanningsolutionMetaData>);
  static copyOf(source: Planningsolution, mutator: (draft: MutableModel<Planningsolution, PlanningsolutionMetaData>) => MutableModel<Planningsolution, PlanningsolutionMetaData> | void): Planningsolution;
}

export declare class Technicalsolution {
  readonly id: string;
  readonly positionId?: number;
  readonly Title?: string;
  readonly Content?: string;
  readonly Popup?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Technicalsolution, TechnicalsolutionMetaData>);
  static copyOf(source: Technicalsolution, mutator: (draft: MutableModel<Technicalsolution, TechnicalsolutionMetaData>) => MutableModel<Technicalsolution, TechnicalsolutionMetaData> | void): Technicalsolution;
}