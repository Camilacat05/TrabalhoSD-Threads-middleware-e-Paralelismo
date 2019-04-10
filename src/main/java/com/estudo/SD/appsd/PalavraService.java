package com.estudo.SD.appsd;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface PalavraService {

    @POST("/")
    Call<Palavra> enviaPalavra(@Body Palavra palavra);
}
