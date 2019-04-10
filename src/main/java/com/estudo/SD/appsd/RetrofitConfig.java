package com.estudo.SD.appsd;

import retrofit2.Retrofit;
import retrofit2.converter.jackson.JacksonConverterFactory;
public class RetrofitConfig {
    private final Retrofit retrofit;

    public RetrofitConfig() {
        this.retrofit = new Retrofit.Builder().
                baseUrl("http://192.168.43.179:3000").
                addConverterFactory(JacksonConverterFactory.create()).build();
    }

    public PalavraService getPalavraService() {
        return this.retrofit.create(PalavraService.class);
    }
}
