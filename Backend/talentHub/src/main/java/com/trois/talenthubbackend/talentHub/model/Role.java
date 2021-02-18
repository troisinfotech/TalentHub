package com.trois.talenthubbackend.talentHub.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.google.gson.annotations.SerializedName;
@Entity
public class Role {
	@SerializedName("userid")
	private int userId;
	@SerializedName("rolename")
	private String roleName;
	@Id
	@SerializedName("roleid")
	private int roleId;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

}
