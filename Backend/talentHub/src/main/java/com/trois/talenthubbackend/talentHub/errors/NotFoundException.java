package com.trois.talenthubbackend.talentHub.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {

	private static final long serialVersionUID = -1722429557515310952L;

	public NotFoundException(String message) {
		super(message);
	}
}