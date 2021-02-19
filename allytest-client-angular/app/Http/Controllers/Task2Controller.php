<?php

namespace App\Http\Controllers;

use App\Task2;
use Illuminate\Http\Request;
use App\Http\Resources\Course as CourseResource;
use App\Http\Resources\CourseCollection;

class Task2Controller extends Controller
{
    public function index()
    {
        $command = escapeshellcmd('python task2.py');
        $output = shell_exec($command);
        return $output;
    }
}