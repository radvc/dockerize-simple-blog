<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::name('api')->group(function () {
    Route::name('posts')->group(function () {
        Route::get('/posts', [PostController::class, 'index']);
        Route::post('/posts', [PostController::class, 'create']);
        Route::get('/posts/{id}', [PostController::class, 'show']);
        Route::patch('/posts/{id}/update', [PostController::class, 'update']);
        Route::delete('/posts/{id}/delete', [PostController::class, 'delete']);
    });
});