<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('teachers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('teacher_id')->unique()->index();   // indexed + unique
            $table->string('first_name')->index();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->index();
            $table->date('date_of_birth')->nullable();
            $table->string('gender')->default('male');
            $table->string('nationality')->nullable();
            $table->string('email')->unique()->index();       // indexed + unique
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('department')->index();            // useful for filtering by dept
            $table->json('courses')->nullable();
            $table->string('designation')->nullable();
            $table->string('status')->default('active');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
