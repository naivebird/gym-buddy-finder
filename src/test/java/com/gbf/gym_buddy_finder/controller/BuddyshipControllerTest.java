package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.service.BuddyshipService;
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

public class BuddyshipControllerTest {

    UserProfile profile1;
    UserProfile profile2;

    private MockMvc mockMvc;

    @Mock
    private BuddyshipService buddyshipService;

    @InjectMocks
    private BuddyshipController buddyshipController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(buddyshipController).build();
    }

    @Test
    public void testGetBuddiesById() throws Exception {
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

        List<UserProfile> buddies = List.of(profile1, profile2);

        when(buddyshipService.getBuddiesById(1L)).thenReturn(buddies);


        mockMvc.perform(get("/api/v1/buddy/1"))
                .andExpect(status().isOk())
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

        verify(buddyshipService, times(1)).getBuddiesById(1L);
        verifyNoMoreInteractions(buddyshipService);
    }
}

