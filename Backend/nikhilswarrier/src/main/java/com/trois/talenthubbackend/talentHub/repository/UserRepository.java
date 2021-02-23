package com.trois.talenthubbackend.talentHub.repository;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.mapper.UserDTOMapper;

@Component
public class UserRepository {
	JdbcTemplate jdbcTemplate;
	private final String FIND_USERS = "SELECT * FROM user WHERE id=?";

	@Autowired
	public UserRepository(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public UserDTO findUserById(int id) {

		return jdbcTemplate.queryForObject(FIND_USERS, new Object[] { id }, new UserDTOMapper(jdbcTemplate));

	}
}
