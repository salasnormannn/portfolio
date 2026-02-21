package com.salasnorman.portfolio.controller;

import com.salasnorman.portfolio.model.ContactMessage;
import com.salasnorman.portfolio.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<String> sendMessage(@RequestBody ContactMessage message) {
        String response = contactService.sendMessage(message);
        return ResponseEntity.ok(response);
    }
}