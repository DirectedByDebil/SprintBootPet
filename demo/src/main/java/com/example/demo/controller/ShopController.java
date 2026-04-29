package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ShopController {
    
    @GetMapping("/shop")
    public String getShop(@RequestParam(name="section",required=false,defaultValue="axes") String section, Model model) {
        model.addAttribute("section", section);
        return "shop";
    }
    

}
