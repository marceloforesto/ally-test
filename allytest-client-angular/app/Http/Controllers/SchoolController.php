<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\School;
use App\Http\Resources\School as SchoolResource;
use App\Http\Resources\SchoolCollection;

class SchoolController extends Controller
{
    public function index()
    {
        return new SchoolCollection(School::all());
    }

    public function show($id)
    {
        return new SchoolResource(School::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'city' => 'required|max:255',
        ]);

        $school = School::create($request->all());

        return (new SchoolResource($school))
                ->response()
                ->setStatusCode(201);
    }

   
    public function delete($id)
    {
        $school = School::findOrFail($id);
        $school->delete();

        return response()->json(null, 204);
    }

    public function update ($id) 
    {
        
        $school = school::find($id);
        $school->name = Input::get('name');
        $school->city = Input::get('city');
        $school->save();

        return Redirect::to('schools');   
    }
}