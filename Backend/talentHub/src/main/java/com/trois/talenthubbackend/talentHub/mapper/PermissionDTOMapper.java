package com.trois.talenthubbackend.talentHub.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.trois.talenthubbackend.talentHub.dto.PermissionDTO;

public class PermissionDTOMapper implements RowMapper<PermissionDTO> {

	@Override
	public PermissionDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		PermissionDTO dto = new PermissionDTO();
		dto.setPermissionId(rs.getInt("id"));
		dto.setPermissionName(rs.getString("name"));
		return dto;
	}

}
