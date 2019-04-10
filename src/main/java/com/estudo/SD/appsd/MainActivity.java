package com.estudo.SD.appsd;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    private Button mBtnEnvia;
    private TextView mTextPalavra1;
    private TextView mTextPalavra2;
    private EditText mEdtText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.mBtnEnvia = (Button) findViewById(R.id.enviar);
        this.mTextPalavra1 = (TextView) findViewById(R.id.palavraCaixaAlta);
        this.mTextPalavra2 = (TextView) findViewById(R.id.palavraConcat);
        this.mEdtText = (EditText) findViewById(R.id.palavra);

        this.mBtnEnvia.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Palavra palavra = new Palavra();
                String p = mEdtText.getText().toString();
                palavra.setPalavra(p);
                palavraEnvia(palavra);
            }
        });

    }

    public void palavraEnvia(Palavra palavra) {
        Call<Palavra> call = new RetrofitConfig().getPalavraService().enviaPalavra(palavra);
        call.enqueue(new Callback<Palavra>() {
            @Override
            public void onResponse(Call<Palavra> call, Response<Palavra> response) {
                Palavra palavra = new Palavra();
                palavra = response.body();
                mTextPalavra1.setText("Caixa alta: "+palavra.getPalavraCaixaAlta());
                mTextPalavra2.setText("Concatenada: "+palavra.getPalavraConcatenada());
            }

            @Override
            public void onFailure(Call<Palavra> call, Throwable t) {
                Toast.makeText(getApplicationContext(), ""+t.getMessage(), Toast.LENGTH_LONG).show();
                Log.e("Service   ", "Erro ao enviar." + t.getMessage());
            }
        });
    }
}
