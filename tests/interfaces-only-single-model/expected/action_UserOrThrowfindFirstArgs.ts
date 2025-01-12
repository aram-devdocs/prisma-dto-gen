// Auto-generated by prisma-dto-gen (refactored inline)

export interface UserOrThrowFindFirstArgs {
  where?: {
  AND?: any /* circular reference to UserWhereInput */;
  OR?: any /* circular reference to UserWhereInput */;
  NOT?: any /* circular reference to UserWhereInput */;
  id?: ({
  equals?: any;
  in?: number[];
  notIn?: number[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: (number | {
  equals?: any;
  in?: number[];
  notIn?: number[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: (number | any /* circular reference to NestedIntFilter */)
})
} | number);
  name?: ({
  equals?: any;
  in?: string[];
  notIn?: string[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  contains?: any;
  startsWith?: any;
  endsWith?: any;
  not?: (string | {
  equals?: any;
  in?: string[];
  notIn?: string[];
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  contains?: any;
  startsWith?: any;
  endsWith?: any;
  not?: (string | any /* circular reference to NestedStringFilter */)
})
} | string);
  email?: (any /* circular reference to StringFilter */ | string)
};
  orderBy?: ({
  id?: any;
  name?: any;
  email?: any
}[] | any /* circular reference to UserOrderByWithRelationInput */);
  cursor?: {
  id?: number;
  AND?: any /* circular reference to UserWhereInput */;
  OR?: any /* circular reference to UserWhereInput */;
  NOT?: any /* circular reference to UserWhereInput */;
  name?: (any /* circular reference to StringFilter */ | string);
  email?: (any /* circular reference to StringFilter */ | string)
};
  take?: number;
  skip?: number;
  distinct?: any;
}