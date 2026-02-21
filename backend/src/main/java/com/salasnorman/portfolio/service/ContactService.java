package com.salasnorman.portfolio.service;

import com.salasnorman.portfolio.model.ContactMessage;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    public String sendMessage(ContactMessage message) {
        // Log the message for now
        // In a future phase, you can integrate email (JavaMailSender)
        System.out.println("=== NEW CONTACT MESSAGE ===");
        System.out.println("From:    " + message.getName());
        System.out.println("Email:   " + message.getEmail());
        System.out.println("Message: " + message.getMessage());
        System.out.println("===========================");

        return "Message received. Thank you, " + message.getName() + "!";
    }
}