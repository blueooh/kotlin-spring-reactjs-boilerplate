package com.example.boilerplate.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class IndexController {
    @GetMapping("/")
    suspend fun index(): String {
        return "index"
    }
}