package com.salasnorman.portfolio.service;

import com.salasnorman.portfolio.model.Skill;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
public class SkillService {

    public List<Skill> getAllSkills() {
        return Arrays.asList(
                Skill.builder().name("Java").category("Backend").level(85).build(),
                Skill.builder().name("Spring Boot").category("Backend").level(75).build(),
                Skill.builder().name("REST APIs").category("Backend").level(75).build(),
                Skill.builder().name("React").category("Frontend").level(70).build(),
                Skill.builder().name("JavaScript").category("Frontend").level(70).build(),
                Skill.builder().name("HTML & CSS").category("Frontend").level(80).build(),
                Skill.builder().name("Docker").category("DevOps").level(60).build(),
                Skill.builder().name("GitHub Actions").category("DevOps").level(65).build(),
                Skill.builder().name("Git").category("DevOps").level(80).build(),
                Skill.builder().name("MySQL").category("Database").level(70).build()
        );
    }
}