package com.trois.talenthubbackend.talentHub.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RoleDTO {
	@JsonProperty("id")
	private int roleId;
	@JsonProperty("name")
	private String roleName;
	@JsonProperty("permissions")
	private List<PermissionDTO> permissions;

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<PermissionDTO> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<PermissionDTO> permissions) {
		this.permissions = permissions;
	}

}
