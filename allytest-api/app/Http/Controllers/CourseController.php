<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Course;
use App\Http\Resources\Course as CourseResource;
use App\Http\Resources\CourseCollection;

class CourseController extends Controller
{
    public function index()
    {
        return new CourseCollection(Course::all());
    }

    public function show($id)
    {
        return new CourseResource(Course::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'school' => 'required|max:255',
            'description' => 'required|max:255',
            'startDate' => 'required|date',
        ]);

        $course = Course::create($request->all());

        return (new CourseResource($course))
                ->response()
                ->setStatusCode(201);
    }

   
    public function delete($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return response()->json(null, 204);
    }

    public function update ($id) 
    {
        
        $course = course::find($id);
        $course->name = Input::get('name');
        $course->school = Input::get('school');
        $course->description = Input::get('description');
        $course->startDate = Input::get('startDate');
        $course->save();

        return Redirect::to('courses');   
    }

}