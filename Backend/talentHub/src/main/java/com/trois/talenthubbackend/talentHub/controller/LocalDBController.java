package com.trois.talenthubbackend.talentHub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.trois.talenthubbackend.talentHub.dto.UserDTO;
import com.trois.talenthubbackend.talentHub.service.LocalDBService;

@RestController
public class LocalDBController {
	@Autowired
	private LocalDBService localDbService;

	@GetMapping("/local/user/{id}")
	@ResponseBody
	public UserDTO getUserById(@PathVariable int id) {
		return localDbService.getUserbyId(id);
	}

}
