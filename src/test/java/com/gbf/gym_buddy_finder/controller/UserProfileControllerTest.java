package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.service.UserProfileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserProfileControllerTest {

    UserProfile profile1;
    UserProfile profile2;

    private MockMvc mockMvc;

    @Mock
    private UserProfileService userProfileService;

    @InjectMocks
    private UserProfileController userProfileController;

    @BeforeEach
    public void setUp() {

        profile1 = new UserProfile();
        profile1.setId(1L);
        profile1.setFirstName("John");
        profile1.setLastName("Doe");
        profile1.setBio("Fitness enthusiast");
        LocalDate date1 = LocalDate.of(1990, 1, 1);
        profile1.setDob(date1);
        profile1.setCity("Vancouver");
        profile1.setCountry("Canada");

        profile2 = new UserProfile();
        profile2.setId(2L);
        profile2.setFirstName("Dave");
        profile2.setLastName("Smith");
        profile2.setBio("Gym maniac");
        LocalDate date2 = LocalDate.of(1993, 1, 1);
        profile2.setDob(date2);
        profile2.setCity("Burnaby");
        profile2.setCountry("Canada");

        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userProfileController).build();
    }

    @Test
    public void testGetProfileById() throws Exception {

        when(userProfileService.getProfileById(1L)).thenReturn(profile1);

        mockMvc.perform(get("/api/v1/profile/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.firstName", is("John")))
                .andExpect(jsonPath("$.lastName", is("Doe")))
                .andExpect(jsonPath("$.bio", is("Fitness enthusiast")))
                .andExpect(jsonPath("$.dob[0]", is(1990)))
                .andExpect(jsonPath("$.dob[1]", is(1)))
                .andExpect(jsonPath("$.dob[2]", is(1)))
                .andExpect(jsonPath("$.city", is("Vancouver")))
                .andExpect(jsonPath("$.country", is("Canada")));


        verify(userProfileService, times(1)).getProfileById(1L);
        verifyNoMoreInteractions(userProfileService);
    }

    @Test
    public void testGetNearbyProfiles() throws Exception {
        List<UserProfile> profiles = List.of(profile1, profile2);

        when(userProfileService.getNearbyProfiles(1L)).thenReturn(profiles);

        mockMvc.perform(get("/api/v1/profile/nearby").param("id", "1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].firstName", is("John")))
                .andExpect(jsonPath("$[0].lastName", is("Doe")))
                .andExpect(jsonPath("$[0].bio", is("Fitness enthusiast")))
                .andExpect(jsonPath("$[0].dob[0]", is(1990)))
                .andExpect(jsonPath("$[0].dob[1]", is(1)))
                .andExpect(jsonPath("$[0].dob[2]", is(1)))
                .andExpect(jsonPath("$[0].city", is("Vancouver")))
                .andExpect(jsonPath("$[0].country", is("Canada")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].firstName", is("Dave")))
                .andExpect(jsonPath("$[1].lastName", is("Smith")))
                .andExpect(jsonPath("$[1].bio", is("Gym maniac")))
                .andExpect(jsonPath("$[1].dob[0]", is(1993)))
                .andExpect(jsonPath("$[1].dob[1]", is(1)))
                .andExpect(jsonPath("$[1].dob[2]", is(1)))
                .andExpect(jsonPath("$[1].city", is("Burnaby")))
                .andExpect(jsonPath("$[1].country", is("Canada")));

        verify(userProfileService, times(1)).getNearbyProfiles(1L);
        verifyNoMoreInteractions(userProfileService);
    }
}
