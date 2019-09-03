
import { getPolicyApi } from '../shared/user-login';

const policyApi = getPolicyApi();

export async function fetchGroupPolicies({ group_uuid, limit, offset }) {
  let policiesData = await policyApi.listPolicies(limit, offset, undefined, undefined, group_uuid);
  let policies = policiesData.data;
  return Promise.all(policies.map(async policy => {
    let policyWithRoles = await policyApi.getPolicy(policy.uuid);
    return { ...policy, roles: policyWithRoles.roles };
  })).then(data => ({
    ...policiesData,
    data
  }));
}

export async function fetchPolicy(uuid) {
  return await policyApi.getPolicy(uuid);
}

export async function createPolicy(data) {
  return await policyApi.createPolicies(data);
}

export async function updatePolicy(data) {
  return await policyApi.updatePolicy(data);
}

export async function removePolicy(policyId) {
  return await policyApi.deletePolicy(policyId);
}
