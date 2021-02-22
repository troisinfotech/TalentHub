package com.trois.talenthubbackend.talentHub.errors;

	import org.springframework.http.HttpStatus;
	import org.springframework.web.bind.annotation.ResponseStatus;

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public class BadRequestException extends RuntimeException {

		private static final long serialVersionUID = 1767794737342902805L;

		public BadRequestException(String message) {
			super(message);
		}
	}

