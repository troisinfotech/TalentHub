package com.trois.talenthubbackend.talentHub.dto;

import com.google.gson.annotations.SerializedName;

public class PermissionDTO {
	@SerializedName("permissionid")
	private int permissionId;
	@SerializedName("roleid")
	private int roleId;
	@SerializedName("permissionname")
	private String permissionName;

	public int getPermissionId() {
		return permissionId;
	}

	public void setPermissionId(int permissionId) {
		this.permissionId = permissionId;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getPermissionName() {
		return permissionName;
	}

	public void setPermissionName(String permissionName) {
		this.permissionName = permissionName;
	}

}
