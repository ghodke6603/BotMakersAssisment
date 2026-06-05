package com.botmakers.rbac_auth_system.controller;
import com.botmakers.rbac_auth_system.dto.LoginRequest;
import com.botmakers.rbac_auth_system.dto.LoginResponse;
import com.botmakers.rbac_auth_system.entity.User;
import java.util.List;

import com.botmakers.rbac_auth_system.dto.RegisterRequest;
import com.botmakers.rbac_auth_system.service.AuthService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }
    @GetMapping("/test")
    public String test() {
        return "Auth API Working";
    }
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return authService.getAllUsers();
    }
    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
}