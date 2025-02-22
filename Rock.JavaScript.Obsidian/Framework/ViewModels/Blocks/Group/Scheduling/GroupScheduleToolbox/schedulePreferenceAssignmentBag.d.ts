//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the Rock.CodeGeneration project
//     Changes to this file will be lost when the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
// <copyright>
// Copyright by the Spark Development Network
//
// Licensed under the Rock Community License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.rockrms.com/license
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//

import { Guid } from "@Obsidian/Types";

/** A bag that contains information about a schedule preference assignment for the group schedule toolbox block. */
export type SchedulePreferenceAssignmentBag = {
    /** Gets or sets the group member assignment unique identifier. */
    groupMemberAssignmentGuid?: Guid | null;

    /** Gets or sets the location name. */
    locationName?: string | null;

    /** Gets or sets the schedule name. */
    scheduleName?: string | null;
};
