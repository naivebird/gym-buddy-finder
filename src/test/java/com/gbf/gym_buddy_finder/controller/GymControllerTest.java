package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.Gym;
import com.gbf.gym_buddy_finder.service.GymService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class GymControllerTest {

    private MockMvc mockMvc;

    @Mock
    private GymService gymService;

    @InjectMocks
    private GymController gymController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(gymController).build();
    }

    @Test
    public void testGetAllGyms() throws Exception {
        Gym gym1 = new Gym();
        Gym gym2 = new Gym();
        gym1.setId(1L);
        gym1.setEmail("gym1@gmail.com");
        gym1.setName("Gym A");
        gym1.setAddress("Address A");
        gym1.setDescription("Description A");

        gym2.setId(2L);
        gym2.setEmail("gym2@gmail.com");
        gym2.setName("Gym B");
        gym2.setAddress("Address B");
        gym2.setDescription("Description B");


        List<Gym> gyms = List.of(gym1, gym2);

        when(gymService.getAllGyms()).thenReturn(new ResponseEntity<>(gyms, HttpStatus.OK));

        mockMvc.perform(get("/api/v1/gym/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Gym A")))
                .andExpect(jsonPath("$[0].address", is("Address A")))
                .andExpect(jsonPath("$[0].description", is("Description A")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].name", is("Gym B")))
                .andExpect(jsonPath("$[1].address", is("Address B")))
                .andExpect(jsonPath("$[1].description", is("Description B")));

        verify(gymService, times(1)).getAllGyms();
        verifyNoMoreInteractions(gymService);
    }
}
