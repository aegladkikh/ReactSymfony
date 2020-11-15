<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class IndexController
 * @package App\Controller
 */
class IndexController extends AbstractController
{
    /**
     * @Route("/", name="app.index", methods={"GET"})
     */
    public function index(): Response
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/search", name="app.search", methods={"GET", "POST"})
     */
    public function search(): Response
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/about", name="app.about", methods={"GET"})
     */
    public function about(): Response
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/note/{id}", name="app.notes", methods={"GET"})
     */
    public function notes(): Response
    {
        return $this->render('pages/index.html.twig');
    }
}
