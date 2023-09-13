package com.example.boilerplate

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [ErrorMvcAutoConfiguration::class])
class BoilerplateApplication

fun main(args: Array<String>) {
	runApplication<BoilerplateApplication>(*args)
}
