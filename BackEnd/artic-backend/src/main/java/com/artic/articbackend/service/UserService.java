package com.artic.articbackend.service;

import com.artic.articbackend.entity.User;
import com.artic.articbackend.exception.CustomeException;
import com.artic.articbackend.global.Response;
import com.artic.articbackend.validatorObj.AdminAddRequst;

public interface UserService {
    Response addAdmin(AdminAddRequst adminRequst);

    Response getAdmin();

    Response getAdminById(Long id) throws CustomeException;

    Response updateAdminById(long l,AdminAddRequst adminRequest) throws CustomeException;

    Response deleteAdminById(long l);
}
