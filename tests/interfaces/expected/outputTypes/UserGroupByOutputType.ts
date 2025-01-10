// Auto-generated by prisma-generator-typescript-interfaces

import { UserCountAggregateOutputType } from "./UserCountAggregateOutputType";
import { UserAvgAggregateOutputType } from "./UserAvgAggregateOutputType";
import { UserSumAggregateOutputType } from "./UserSumAggregateOutputType";
import { UserMinAggregateOutputType } from "./UserMinAggregateOutputType";
import { UserMaxAggregateOutputType } from "./UserMaxAggregateOutputType";

export interface UserGroupByOutputType {
  id: number;
  name: string;
  email: string;
  _count?: UserCountAggregateOutputType | null;
  _avg?: UserAvgAggregateOutputType | null;
  _sum?: UserSumAggregateOutputType | null;
  _min?: UserMinAggregateOutputType | null;
  _max?: UserMaxAggregateOutputType | null;
}