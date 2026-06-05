package com.botmakers.rbac_auth_system.service;

import com.botmakers.rbac_auth_system.dto.LoginRequest;
import com.botmakers.rbac_auth_system.dto.LoginResponse;
import com.botmakers.rbac_auth_system.dto.RegisterRequest;
import com.botmakers.rbac_auth_system.entity.User;

import java.util.List;

public interface AuthService {

    String register(RegisterRequest request);

    List<User> getAllUsers();

    LoginResponse login(LoginRequest request);
}