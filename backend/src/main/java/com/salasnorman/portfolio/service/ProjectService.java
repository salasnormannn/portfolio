package com.salasnorman.portfolio.service;

import com.salasnorman.portfolio.model.Project;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
public class ProjectService {

    public List<Project> getAllProjects() {
        return Arrays.asList(
                Project.builder()
                        .id(1L)
                        .title("Farm.io")
                        .description("Agricultural management system built with core Java OOP principles. " +
                                "Implements inheritance, polymorphism, encapsulation, and abstraction " +
                                "to manage farm entities and operations.")
                        .tech(Arrays.asList("Java", "OOP", "CLI"))
                        .github("https://github.com/salasnormannn/portfolio/tree/develop")
                        .featured(true)
                        .build(),

                Project.builder()
                        .id(2L)
                        .title("Ordering & Inventory System")
                        .description("Full-featured ordering and stock tracking system. Handles product " +
                                "management, order processing, and real-time inventory updates " +
                                "with a clean command-line interface.")
                        .tech(Arrays.asList("Java", "OOP", "Data Structures"))
                        .github("https://github.com/salasnormannn/portfolio/tree/develop")
                        .featured(true)
                        .build(),

                Project.builder()
                        .id(3L)
                        .title("Reservation System")
                        .description("Booking and scheduling management system that handles reservations, " +
                                "availability checks, and conflict resolution using Java collections " +
                                "and file-based persistence.")
                        .tech(Arrays.asList("Java", "OOP", "File I/O"))
                        .github("https://github.com/salasnormannn/portfolio/tree/develop")
                        .featured(true)
                        .build(),

                Project.builder()
                        .id(4L)
                        .title("Monopoly CLI Game")
                        .description("Fully playable command-line Monopoly game implementing game logic, " +
                                "player management, property trading, and turn-based mechanics " +
                                "using object-oriented design patterns.")
                        .tech(Arrays.asList("Java", "OOP", "Game Logic", "Design Patterns"))
                        .github("https://github.com/salasnormannn/portfolio/tree/develop")
                        .featured(false)
                        .build()
        );
    }
}