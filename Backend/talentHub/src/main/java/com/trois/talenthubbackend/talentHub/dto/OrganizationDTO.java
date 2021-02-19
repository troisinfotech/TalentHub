package com.trois.talenthubbackend.talentHub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrganizationDTO {
	@JsonProperty("id")
	private int organizationId;
	@JsonProperty("name")
	private String organizationName;
	public int getOrganizationId() {
		return organizationId;
	}
	public void setOrganizationId(int organizationId) {
		this.organizationId = organizationId;
	}
	public String getOrganizationName() {
		return organizationName;
	}
	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}
	
}
