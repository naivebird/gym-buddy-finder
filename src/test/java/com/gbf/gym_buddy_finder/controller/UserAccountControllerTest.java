package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.UserAccount;
import com.gbf.gym_buddy_finder.service.UserAccountService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static com.gbf.gym_buddy_finder.model.Role.ADMIN;
import static com.gbf.gym_buddy_finder.model.Role.GYM_GOER;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class UserAccountControllerTest {

    UserAccount user;

    private MockMvc mockMvc;

    @Mock
    private UserAccountService userAccountService;

    @InjectMocks
    private UserAccountController userAccountController;

    @BeforeEach
    public void setUp() {
        user = new UserAccount();
        user.setId(1L);
        user.setEmail("john@example.com");
        user.setPassword("password");
        user.setRole(GYM_GOER);

        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userAccountController).build();
    }

    @Test
    public void testGetUsers() throws Exception {
        UserAccount user1 = new UserAccount();
        user1.setId(1L);
        user1.setEmail("john@example.com");
        user1.setPassword("password");
        user1.setRole(GYM_GOER);

        UserAccount user2 = new UserAccount();
        user2.setId(2L);
        user2.setEmail("jane@example.com");
        user2.setPassword("password");
        user2.setRole(ADMIN);

        List<UserAccount> users = List.of(user1, user2);

        when(userAccountService.getUsers()).thenReturn(users);

        mockMvc.perform(get("/api/v1/user/all"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].email", is("john@example.com")))
                .andExpect(jsonPath("$[0].password", is("password")))
                .andExpect(jsonPath("$[0].role", is("GYM_GOER")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].email", is("jane@example.com")))
                .andExpect(jsonPath("$[1].password", is("password")))
                .andExpect(jsonPath("$[1].role", is("ADMIN")));


        verify(userAccountService, times(1)).getUsers();
        verifyNoMoreInteractions(userAccountService);
    }

    @Test
    public void testGetUserById() throws Exception {
        when(userAccountService.getUserById(1L)).thenReturn(user);

        mockMvc.perform(get("/api/v1/user/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.email", is("john@example.com")))
                .andExpect(jsonPath("$.password", is("password")))
                .andExpect(jsonPath("$.role", is("GYM_GOER")));

        verify(userAccountService, times(1)).getUserById(1L);
        verifyNoMoreInteractions(userAccountService);
    }

    @Test
    public void testGetUser() throws Exception {

        when(userAccountService.getUser("john@example.com", "password")).thenReturn(user);

        mockMvc.perform(get("/api/v1/user/get")
                        .param("email", "john@example.com")
                        .param("password", "password"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.email", is("john@example.com")))
                .andExpect(jsonPath("$.password", is("password")))
                .andExpect(jsonPath("$.role", is("GYM_GOER")));

        verify(userAccountService, times(1)).getUser("john@example.com", "password");
        verifyNoMoreInteractions(userAccountService);
    }

    @Test
    public void testAddUser() throws Exception {

        doNothing().when(userAccountService).addUser(any(UserAccount.class));

        mockMvc.perform(post("/api/v1/user/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"id\":1,\"email\":\"john@example.com\",\"password\":\"password\", \"role\":1}"))
                .andExpect(status().isOk())
                .andExpect(content().string("User added"));

        verify(userAccountService, times(1)).addUser(any(UserAccount.class));
        verifyNoMoreInteractions(userAccountService);
    }

    @Test
    public void testUpdateUser() throws Exception {
        when(userAccountService.updateUser(any(UserAccount.class))).thenReturn(user);

        mockMvc.perform(put("/api/v1/user/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"id\":1,\"email\":\"john@example.com\",\"password\":\"password\", \"role\":1}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.email", is("john@example.com")))
                .andExpect(jsonPath("$.password", is("password")))
                .andExpect(jsonPath("$.role", is("GYM_GOER")));

        verify(userAccountService, times(1)).updateUser(any(UserAccount.class));
        verifyNoMoreInteractions(userAccountService);
    }

    @Test
    public void testDeleteUser() throws Exception {
        doNothing().when(userAccountService).deleteUser(1L);

        mockMvc.perform(delete("/api/v1/user/delete")
                        .param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(content().string("User deleted successfully"));

        verify(userAccountService, times(1)).deleteUser(1L);
        verifyNoMoreInteractions(userAccountService);
    }
}
