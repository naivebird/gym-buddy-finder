package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.dto.UserPreferenceDto;
import com.gbf.gym_buddy_finder.dto.UserPreferenceDtoImpl;
import com.gbf.gym_buddy_finder.service.UserPreferenceService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserPreferenceControllerTest {

    private MockMvc mockMvc;

    @Mock
    private UserPreferenceService userPreferenceService;

    @InjectMocks
    private UserPreferenceController userPreferenceController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userPreferenceController).build();
    }

    @Test
    public void testGetUserPreferences() throws Exception {
        UserPreferenceDto preference1 = new UserPreferenceDtoImpl(1L, "What is your body type?", "Average");
        UserPreferenceDto preference2 = new UserPreferenceDtoImpl(2L, "Do you smoke?", "Yes");

        List<UserPreferenceDto> preferences = List.of(preference1, preference2);

        when(userPreferenceService.getUserPreferences(1L)).thenReturn(preferences);

        mockMvc.perform(get("/api/v1/preferences/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].userId", is(1)))
                .andExpect(jsonPath("$[0].question", is("What is your body type?")))
                .andExpect(jsonPath("$[0].answer", is("Average")))
                .andExpect(jsonPath("$[1].userId", is(2)))
                .andExpect(jsonPath("$[1].question", is("Do you smoke?")))
                .andExpect(jsonPath("$[1].answer", is("Yes")));

        verify(userPreferenceService, times(1)).getUserPreferences(1L);
        verifyNoMoreInteractions(userPreferenceService);
    }
}
