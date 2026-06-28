package com.example.demo.exception;

import java.time.Instant;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(RuntimeException.class)
    public ProblemDetail handleRuntimeException(RuntimeException ex) {
        
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
            HttpStatus.BAD_REQUEST, 
            ex.getMessage()
        );

        problemDetail.setTitle("Bad Request");
        problemDetail.setProperty("timestamp", Instant.now());
        problemDetail.setProperty("exception", ex.getClass().getSimpleName());    
        return problemDetail;
    }
    
    @ExceptionHandler(NotFoundException.class)
    public ProblemDetail handleNotFound(NotFoundException ex) {
        
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
            HttpStatus.NOT_FOUND,
            ex.getMessage()
        );

        problemDetail.setTitle("Resource not found");
        problemDetail.setProperty("timestamp", Instant.now());
        return problemDetail;
    }
}
