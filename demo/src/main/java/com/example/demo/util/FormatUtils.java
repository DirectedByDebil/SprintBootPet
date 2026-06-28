package com.example.demo.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

public class FormatUtils {
    
    public static String toJSON(Object obj) {
        try {
            
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(obj);

        } catch (JsonProcessingException exception) {
            return exception.getMessage();
        }
    }
}
