package com.artic.articbackend.validatorObj;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminAddRequst {
    @NotEmpty(message = "Admin Name Must Not Be EMPTY,Only Character Allowed")
    @Pattern(message = "Admin Name Must Not Be EMPTY,Only Character Allowed", regexp = "^[a-zA-Z ]*$")
    @NotBlank(message = "Admin Name Must Not Be EMPTY,Only Character Allowed")
    private String adminName;
    @NotEmpty(message = "Admin MobileNumber Must Not Be EMPTY,Should Be 10 digits")
    @Pattern(message = "Admin MobileNumber Must Not Be EMPTY,Should be 10 digits", regexp = "[0-9]{10}+")
    private String adminMobileNumber;

    @NotEmpty(message = "Admin Email Must Not Be EMPTY, Should Be a valid email address")
    @Pattern(message = "Admin Email Must Not Be EMPTY, Should Be a valid email address", regexp = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
    private String adminEmailId;

    @NotEmpty(message = "Password Must Not Be EMPTY, Should Contain One UpperCase, LowerCase & digit each. minimum 8ch.")
    @Pattern(message = "Password Must Not Be EMPTY, Should Contain One UpperCase, LowerCase & digit each. minimum 8ch.", regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
    private String password;
}
