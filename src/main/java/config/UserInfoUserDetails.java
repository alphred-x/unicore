package com.decoderz.unicore.config;

import com.decoderz.unicore.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserInfoUserDetails implements UserDetails {

    private final String username;
    private final String password;
    private final GrantedAuthority authority;

    public UserInfoUserDetails(User user) {
        this.username = user.getEmail();
        this.password = user.getPasswordHash();
        this.authority = new SimpleGrantedAuthority(user.getRole().name());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() { return password; }

    @Override
    public String getUsername() { return username; }

    @Override
    public boolean isAccountNonExpired() { return true; }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return true; }
}