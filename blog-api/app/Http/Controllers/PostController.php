<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Request $request) {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function create(Request $request) {
        $post = Post::create([
            "title" => $request->input("title"),
            "body" => $request->input("body"),
            "author" => $request->input("author"),
        ]);
        return response()-> json($post);
    }

    public function show(string $id) {
        $post = Post::find($id);
        return response()->json($post);
    }

    public function update(Request $request, string $id) {
        $post = Post::find($id);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->author = $request->author;

        $post->save();

        return response()->json($post);
    }

    public function delete(string $id) {
        $post = Post::find($id)->delete();
        return response()->json(["message" => "Deleted"]);
    }
}