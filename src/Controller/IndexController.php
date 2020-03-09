<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="app.index", methods={"GET"})
     */
    public function index()
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/about", name="app.about", methods={"GET"})
     */
    public function about()
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/note/{id}", name="app.notes", methods={"GET"})
     */
    public function notes()
    {
        return $this->render('pages/index.html.twig');
    }
}
