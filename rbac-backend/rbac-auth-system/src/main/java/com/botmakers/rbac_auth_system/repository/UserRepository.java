//package com.botmakers.rbac_auth_system.repository;
//
//import com.botmakers.rbac_auth_system.entity.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.Optional;
//
//public interface UserRepository extends JpaRepository<User, Long> {
//
//    Optional<User> findByEmail(String email);
//
//}
package com.botmakers.rbac_auth_system.repository;

import com.botmakers.rbac_auth_system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}