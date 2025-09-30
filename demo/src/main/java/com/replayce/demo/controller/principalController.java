package com.replayce.demo.controller;

import org.springframework.stereotype.Controller;

@Controller
public class principalController {
    public String acessarPrincipal() {
        return "administrador/index";
    }
}
