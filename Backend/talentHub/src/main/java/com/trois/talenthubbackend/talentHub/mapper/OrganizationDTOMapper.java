package com.trois.talenthubbackend.talentHub.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.trois.talenthubbackend.talentHub.dto.OrganizationDTO;

public class OrganizationDTOMapper implements RowMapper<OrganizationDTO> {
	// private JdbcTemplate jdbcTemplate;
	// private final String FIND_ORG = "SELECT organization_id as id,
	// organization_name as name FROM organization WHERE user_id=?";

	@Override
	public OrganizationDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
		OrganizationDTO dto = new OrganizationDTO();
		dto.setOrganizationId(rs.getInt("id"));
		dto.setOrganizationName(rs.getString("name"));

		return dto;
	}

}
